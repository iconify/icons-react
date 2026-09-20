import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/l0iv5qv-o.css';
import '../../css/g/g-76qub2o.css';
import '../../css/g/gtph3kbym.css';
import '../../css/i/i-rgeyj1u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="l0iv5qv-o"/><path class="g-76qub2o"/><path class="gtph3kbym"/><path class="i-rgeyj1u"/></g>`,
		"fallback": "streamline-plump-color:stamp",
	});
}

export default Component;
