import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/d/d7me0u.css';
import '../../css/h/hr-5ik.css';
import '../../css/b/blpkcg.css';
import '../../css/s/sj7u0w.css';
import '../../css/x/x3pply.css';
import '../../css/z/z4ecvh.css';
import '../../css/c/cplfnx.css';
import '../../css/t/ty0iaf.css';
import '../../css/s/so-from-4.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c d7me0u"/><path class="a0m25c hr-5ik"/><path class="a0m25c blpkcg"/><path class="a0m25c sj7u0w"/><path class="a0m25c x3pply"/><path class="a0m25c z4ecvh"/><path class="a0m25c cplfnx"/><path class="a0m25c ty0iaf"/>`,
		"fallback": "line-md:list-indented",
	});
}

export default Component;
