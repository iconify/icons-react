import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilbhp-bhd.css';
import '../../css/j/jzrd8fxam.css';
import '../../css/u/uw8ydqbww.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilbhp-bhd"/><path class="jzrd8fxam"/><path class="uw8ydqbww"/>`,
		"fallback": "carbon:watsonx-governance",
	});
}

export default Component;
