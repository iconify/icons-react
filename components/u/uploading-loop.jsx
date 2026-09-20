import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_1xrq.css';
import '../../css/o/o77nnc.css';
import '../../css/o/oa8lri.css';
import '../../css/q/qk4_0r.css';
import '../../css/f/f2j1_e.css';
import '../../css/o/ofgsjj.css';
import '../../css/s/so-from-32.css';
import '../../css/f/fade-to-1.css';
import '../../css/t/tr-l6a01f.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_1xrq o77nnc oa8lri"/><path class="o77nnc qk4_0r"/><path class="f2j1_e g_1xrq o77nnc"/><path class="g_1xrq o77nnc ofgsjj"/>`,
		"fallback": "line-md:uploading-loop",
	});
}

export default Component;
