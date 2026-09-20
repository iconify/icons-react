import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/z7uskkh4x.css';
import '../../css/o/o3t4k4blu.css';
import '../../css/o/oqq9phbgp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="z7uskkh4x"/><path class="o3t4k4blu"/><path class="oqq9phbgp"/></g>`,
		"fallback": "streamline:natrue-ecology-recycle-1-sign-environment-protect-save-arrows",
	});
}

export default Component;
