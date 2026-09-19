import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/d/dcyd5objb.css';
import '../../css/l/l7q0ip_gf.css';
import '../../css/r/rx9asmbnf.css';
import '../../css/z/z5ec-kbwe.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGLAE3qbIy"><g class="rohhhzb0l"><rect class="dcyd5objb"/><path class="l7q0ip_gf"/><path class="rx9asmbnf"/><path class="z5ec-kbwe"/></g></mask></defs><path mask="url(#SVGLAE3qbIy)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:modify-two",
	});
}

export default Component;
