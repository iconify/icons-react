import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/horzycchu.css';
import '../../css/k/ky2hh5pjz.css';
import '../../css/y/ycb8pvbmk.css';
import '../../css/j/juu6lxbqs.css';
import '../../css/z/z92o7wbgg.css';
import '../../css/w/wy_5atbsb.css';
import '../../css/c/cixjkq18x.css';
import '../../css/u/umomfebca.css';
import '../../css/w/w46sd4bxg.css';
import '../../css/u/uz0odd_lk.css';
import '../../css/s/s_f6m4b-b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="horzycchu"/><path class="ky2hh5pjz"/><path class="ycb8pvbmk"/><path class="juu6lxbqs"/><path class="z92o7wbgg"/><path class="wy_5atbsb"/><path class="cixjkq18x"/><path class="umomfebca"/><path class="w46sd4bxg"/><path class="uz0odd_lk"/><path class="s_f6m4b-b"/>`,
		"fallback": "streamline-emojis:pouting-face",
	});
}

export default Component;
