import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jw3yxooyf.css';
import '../../css/a/akg-n4m8r.css';
import '../../css/d/dqhpggbvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jw3yxooyf"/><path class="akg-n4m8r"/><path class="dqhpggbvp"/></g>`,
		"fallback": "lucide-lab:razor",
	});
}

export default Component;
