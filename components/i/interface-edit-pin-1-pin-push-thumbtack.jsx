import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/y2i6hgb-g.css';
import '../../css/i/ibat86b6g.css';
import '../../css/c/cv6ljxbvj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="y2i6hgb-g"/><path class="ibat86b6g"/><circle class="cv6ljxbvj"/></g>`,
		"fallback": "streamline:interface-edit-pin-1-pin-push-thumbtack",
	});
}

export default Component;
