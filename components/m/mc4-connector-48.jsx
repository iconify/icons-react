import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyvsf2efo.css';
import '../../css/l/l4sy4bcud.css';
import '../../css/k/kqv787lxj.css';
import '../../css/s/s7kfd329x.css';
import '../../css/g/gdn9sdxzs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyvsf2efo"/><path class="l4sy4bcud"/><path class="kqv787lxj"/><path class="s7kfd329x"/><path class="gdn9sdxzs"/>`,
		"fallback": "energy-icons:mc4-connector-48",
	});
}

export default Component;
