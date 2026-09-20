import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcjxjtqun.css';
import '../../css/g/gu5zfccqw.css';
import '../../css/x/x9gx-7buw.css';
import '../../css/z/z-uhu55bb.css';
import '../../css/n/n-srp4bhw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcjxjtqun"/><path class="gu5zfccqw"/><path class="x9gx-7buw"/><path class="z-uhu55bb"/><path class="n-srp4bhw"/>`,
		"fallback": "selfhst:relaticle-light",
	});
}

export default Component;
