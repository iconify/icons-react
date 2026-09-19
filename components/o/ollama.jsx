import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/teos6bbsl.css';
import '../../css/a/at11vggis.css';
import '../../css/s/s-klz88_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="teos6bbsl"/><path class="at11vggis"/><path class="s-klz88_c"/>`,
		"fallback": "bxl:ollama",
	});
}

export default Component;
