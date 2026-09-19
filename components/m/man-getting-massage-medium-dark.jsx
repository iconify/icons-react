import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p6o8dccow.css';
import '../../css/t/t772qacii.css';
import '../../css/e/eicwqbbtc.css';
import '../../css/i/itdn_yq1h.css';
import '../../css/b/b0lk_0bbu.css';
import '../../css/i/ikuw0ybqx.css';
import '../../css/k/kqa6tllpf.css';
import '../../css/d/dqbvxb6mz.css';
import '../../css/h/hctk0su8d.css';
import '../../css/z/zrgsbesxg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p6o8dccow"/><path class="t772qacii"/><path class="eicwqbbtc"/><path class="itdn_yq1h"/><path class="b0lk_0bbu"/><path class="ikuw0ybqx"/><path class="kqa6tllpf"/><path class="dqbvxb6mz"/><path class="hctk0su8d"/><path class="zrgsbesxg"/></g>`,
		"fallback": "fluent-emoji-flat:man-getting-massage-medium-dark",
	});
}

export default Component;
