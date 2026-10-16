import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugiqnwbua.css';
import '../../css/w/w7y3w7blm.css';
import '../../css/g/gdsoirb5d.css';
import '../../css/n/n545enbdt.css';
import '../../css/i/i4twrrq4g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugiqnwbua"/><path class="w7y3w7blm"/><path class="gdsoirb5d"/><path class="n545enbdt"/><path class="i4twrrq4g"/>`,
		"fallback": "energy-icons:level-crossing-48-bold",
	});
}

export default Component;
