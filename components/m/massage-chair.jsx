import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/l/l8-7_vbmo.css';
import '../../css/i/io4djxbci.css';
import '../../css/h/hmn32ibuy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG3Q6iqbax"><g class="wwvp95byt"><rect class="l8-7_vbmo"/><path class="io4djxbci"/><path class="hmn32ibuy"/></g></mask></defs><path mask="url(#SVG3Q6iqbax)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:massage-chair",
	});
}

export default Component;
