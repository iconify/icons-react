import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvp3tpbju.css';
import '../../css/q/q36ormboe.css';
import '../../css/q/qoxxme1vj.css';
import '../../css/g/gcldfhbqv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvp3tpbju"/><path class="q36ormboe"/><path class="qoxxme1vj"/><path class="gcldfhbqv"/>`,
		"fallback": "selfhst:labelito-dark",
	});
}

export default Component;
