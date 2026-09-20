import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/rae8lq5yr.css';
import '../../css/n/nsiiz-bec.css';
import '../../css/a/arn-f-bpt.css';
import '../../css/w/wx5voob3f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="rae8lq5yr"/><path class="nsiiz-bec"/><path class="arn-f-bpt"/><path class="wx5voob3f"/></g>`,
		"fallback": "streamline:play-list-5",
	});
}

export default Component;
