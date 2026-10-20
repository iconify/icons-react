import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdcnc9bhs.css';
import '../../css/x/xi2u7tbob.css';
import '../../css/z/zu-bd24ei.css';
import '../../css/m/m_3lnnb5w.css';

const viewBox = {"width":18.035,"height":17.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdcnc9bhs"/><path class="xi2u7tbob"/><path class="zu-bd24ei"/><path class="m_3lnnb5w"/>`,
		"fallback": "k8s:podsecuritypolicy",
	});
}

export default Component;
