import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mmz72pbsz.css';
import '../../css/n/nb23r6rtq.css';
import '../../css/m/mgzqwqbpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mmz72pbsz"/><path clip-rule="evenodd" class="nb23r6rtq"/><path class="mgzqwqbpj"/></g>`,
		"fallback": "streamline-freehand-color:smart-watch-circle",
	});
}

export default Component;
