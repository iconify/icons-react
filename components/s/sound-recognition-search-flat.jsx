import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b1mdzjbyo.css';
import '../../css/k/kixve4biq.css';
import '../../css/i/iuweb9bcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b1mdzjbyo"/><path clip-rule="evenodd" class="kixve4biq"/><path clip-rule="evenodd" class="iuweb9bcj"/></g>`,
		"fallback": "streamline-sharp-color:sound-recognition-search-flat",
	});
}

export default Component;
