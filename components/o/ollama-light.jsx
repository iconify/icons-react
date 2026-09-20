import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3yu5_g7l.css';
import '../../css/s/sq2gbtbfq.css';
import '../../css/f/fqm99lbwq.css';

const viewBox = {"width":646,"height":854};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3yu5_g7l"/><path class="sq2gbtbfq"/><path class="fqm99lbwq"/>`,
		"fallback": "thesvg-color:ollama-light",
	});
}

export default Component;
