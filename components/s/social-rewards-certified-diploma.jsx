import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4s-dik0d.css';
import '../../css/f/f27hbqb1o.css';
import '../../css/l/laqhat8lm.css';
import '../../css/s/sy5uef4ax.css';
import '../../css/i/ihqpztbwp.css';
import '../../css/h/hpd5xeb9k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4s-dik0d"/><path class="f27hbqb1o"/><path class="laqhat8lm"/><path class="sy5uef4ax"/><path class="ihqpztbwp"/><path class="hpd5xeb9k"/>`,
		"fallback": "streamline-pixel:social-rewards-certified-diploma",
	});
}

export default Component;
