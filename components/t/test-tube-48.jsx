import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/towxg4bzd.css';
import '../../css/p/p56w44_1f.css';
import '../../css/i/i6ayrqbef.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="towxg4bzd"/><path class="p56w44_1f"/><path class="i6ayrqbef"/>`,
		"fallback": "energy-icons:test-tube-48",
	});
}

export default Component;
