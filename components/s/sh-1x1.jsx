import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v72wjjzip.css';
import '../../css/i/iyk9pejyo.css';
import '../../css/z/z8sabr9cd.css';
import '../../css/i/i6gyrgb-l.css';
import '../../css/v/v_3yuqt3v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v72wjjzip"/><path class="iyk9pejyo"/><path class="z8sabr9cd"/><path class="i6gyrgb-l"/><path class="v_3yuqt3v"/>`,
		"fallback": "flag:sh-1x1",
	});
}

export default Component;
