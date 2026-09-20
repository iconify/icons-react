import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
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
		"content": `<g class="n1mjunbsu"><path class="f3yu5_g7l"/><path class="sq2gbtbfq"/><path class="fqm99lbwq"/></g>`,
		"fallback": "thesvg-color:ollama-dark",
	});
}

export default Component;
