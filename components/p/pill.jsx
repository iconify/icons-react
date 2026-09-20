import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8uyevbiw.css';
import '../../css/e/epz418bnz.css';
import '../../css/a/a0-8whbga.css';
import '../../css/q/qenwbzlps.css';
import '../../css/c/c_6k8nblp.css';
import '../../css/j/jjv2n6bvm.css';
import '../../css/d/d5hi0bc2y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8uyevbiw"/><path class="epz418bnz"/><path class="a0-8whbga"/><path class="qenwbzlps"/><path class="c_6k8nblp"/><path class="jjv2n6bvm"/><path class="d5hi0bc2y"/>`,
		"fallback": "streamline-emojis:pill",
	});
}

export default Component;
