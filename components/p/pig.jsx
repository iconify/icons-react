import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsk7e2b_h.css';
import '../../css/j/jdrnmbbjo.css';
import '../../css/m/m5uittbbm.css';
import '../../css/b/bpd23-bmw.css';
import '../../css/a/a1-3edo-d.css';
import '../../css/n/n_81tybhp.css';
import '../../css/t/trc9zmvtt.css';
import '../../css/q/qvp_405xi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsk7e2b_h"/><path class="jdrnmbbjo"/><path class="m5uittbbm"/><path class="bpd23-bmw"/><path class="a1-3edo-d"/><path class="n_81tybhp"/><path class="trc9zmvtt"/><path class="qvp_405xi"/>`,
		"fallback": "streamline-emojis:pig",
	});
}

export default Component;
