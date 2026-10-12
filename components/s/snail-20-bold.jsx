import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_4bw_bzz.css';
import '../../css/i/i33fspbsl.css';
import '../../css/b/bns-mjpkf.css';
import '../../css/a/a2wenh5wd.css';
import '../../css/j/jrsejkkoh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_4bw_bzz"/><path class="i33fspbsl"/><path class="bns-mjpkf"/><path class="a2wenh5wd"/><path class="jrsejkkoh"/>`,
		"fallback": "energy-icons:snail-20-bold",
	});
}

export default Component;
