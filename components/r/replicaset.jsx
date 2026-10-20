import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdcnc9bhs.css';
import '../../css/x/xi2u7tbob.css';
import '../../css/l/l5e0p_phe.css';
import '../../css/k/k695n280r.css';
import '../../css/s/skluiz_ci.css';
import '../../css/h/hmwfmm31g.css';

const viewBox = {"width":18.035,"height":17.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdcnc9bhs"/><path class="xi2u7tbob"/><path class="l5e0p_phe"/><path class="k695n280r"/><path class="skluiz_ci"/><path class="hmwfmm31g"/>`,
		"fallback": "k8s:replicaset",
	});
}

export default Component;
