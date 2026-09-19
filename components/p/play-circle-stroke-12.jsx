import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zstbz94ff.css';
import '../../css/t/t4b6zqbbn.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="zstbz94ff"/><path class="t4b6zqbbn"/>`,
		"fallback": "garden:play-circle-stroke-12",
	});
}

export default Component;
