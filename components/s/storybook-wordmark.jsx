import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4sclebpp.css';
import '../../css/o/o1kac1bzy.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o4sclebpp"/><path class="o1kac1bzy"/>`,
		"fallback": "devicon-plain:storybook-wordmark",
	});
}

export default Component;
