import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kehrhwx8k.css';
import '../../css/d/dbnvdzh6r.css';
import '../../css/t/t6qhtnnfm.css';
import '../../css/c/coyv17mlx.css';
import '../../css/c/cnusf2bxo.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kehrhwx8k"/><path class="dbnvdzh6r"/><path class="t6qhtnnfm"/><path class="coyv17mlx"/><path class="cnusf2bxo"/>`,
		"fallback": "devicon:rspec-wordmark",
	});
}

export default Component;
