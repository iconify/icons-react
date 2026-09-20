import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-zezz.css';
import '../../css/y/ydovum.css';
import '../../css/j/jdflhf.css';
import '../../css/m/mvdwqv.css';
import '../../css/d/d-nfa2oq.css';
import '../../css/d/d-dnm8dn.css';
import '../../css/d/d--r6z2q.css';
import '../../css/d/d-knq4xg.css';
import '../../css/d/d-_8bnjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-zezz ydovum"/><path class="jdflhf ydovum"/><path class="mvdwqv ydovum"/>`,
		"fallback": "line-md:twitter-x",
	});
}

export default Component;
