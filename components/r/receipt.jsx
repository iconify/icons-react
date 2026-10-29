import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqvks2byp.css';
import '../../css/t/tgpt75tqs.css';
import '../../css/v/v03hklb9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqvks2byp wm-k"/><path class="tgpt75tqs wm-a"/><path class="v03hklb9o wm-a"/>`,
		"fallback": "withicons-bauhaus:receipt",
	});
}

export default Component;
