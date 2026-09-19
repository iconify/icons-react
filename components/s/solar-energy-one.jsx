import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/t/trw5hnb8v.css';
import '../../css/f/fb4plhbwx.css';
import '../../css/v/vbc7zscer.css';
import '../../css/d/d6u1tcc9r.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGG4tVPcLH"><g class="rohhhzb0l"><path class="trw5hnb8v"/><path class="fb4plhbwx"/><circle class="vbc7zscer"/><path class="d6u1tcc9r"/></g></mask></defs><path mask="url(#SVGG4tVPcLH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:solar-energy-one",
	});
}

export default Component;
