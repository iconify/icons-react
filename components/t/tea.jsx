import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/a/a41kkkbae.css';
import '../../css/y/yokqbnb6v.css';
import '../../css/y/yonyb1bwh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGECfyEcxW"><g class="hv130ab-t"><path class="a41kkkbae"/><path class="yokqbnb6v"/><path class="yonyb1bwh"/></g></mask></defs><path mask="url(#SVGECfyEcxW)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:tea",
	});
}

export default Component;
