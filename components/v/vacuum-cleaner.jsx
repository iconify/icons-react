import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f6vf_yxmf.css';
import '../../css/j/ja7_2f_3u.css';
import '../../css/e/ejt5gkbzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f6vf_yxmf"/><path class="ja7_2f_3u"/><path class="ejt5gkbzg"/></g>`,
		"fallback": "hugeicons:vacuum-cleaner",
	});
}

export default Component;
