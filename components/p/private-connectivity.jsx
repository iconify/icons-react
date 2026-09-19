import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fero-5bec.css';
import '../../css/c/ci3wxgbkl.css';
import '../../css/i/i-v3-zb2d.css';
import '../../css/m/miprkwbjz.css';
import '../../css/s/s6xzyh3xx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fero-5bec"/><circle class="ci3wxgbkl"/><path class="i-v3-zb2d"/><path class="miprkwbjz"/><circle class="s6xzyh3xx"/>`,
		"fallback": "gcp:private-connectivity",
	});
}

export default Component;
