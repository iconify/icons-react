import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oq4j91btj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oq4j91btj"/>`,
		"fallback": "streamline:interface-setting-screwdriver-screwdriver-screw-tool-settings-hand",
	});
}

export default Component;
