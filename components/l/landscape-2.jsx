import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g8c66b0jw.css';
import '../../css/v/vks9v3nji.css';
import '../../css/h/hp_8as9fa.css';
import '../../css/k/kwqw2qbtv.css';
import '../../css/e/en_9zqu5e.css';
import '../../css/v/v8th3bb-w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g8c66b0jw"/><path class="vks9v3nji"/><path class="hp_8as9fa"/><path class="kwqw2qbtv"/><path class="en_9zqu5e"/><path class="v8th3bb-w"/></g>`,
		"fallback": "streamline-flex-color:landscape-2",
	});
}

export default Component;
