import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/a/ab2lhwbpp.css';
import '../../css/z/z5959tbft.css';
import '../../css/x/xlw9t-4mj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="ab2lhwbpp"/><circle class="z5959tbft"/><path class="xlw9t-4mj"/></g>`,
		"fallback": "icon-park-outline:radio-nanny",
	});
}

export default Component;
