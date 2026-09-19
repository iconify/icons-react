import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylrso7y3c.css';
import '../../css/j/ja8cnttar.css';
import '../../css/t/t4xl_0g8d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGWJKV4cVS"><g class="ylrso7y3c"><path class="ja8cnttar"/><path class="t4xl_0g8d"/></g></mask></defs><path mask="url(#SVGWJKV4cVS)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:tuchong",
	});
}

export default Component;
