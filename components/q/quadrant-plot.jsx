import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c27x9ybmw.css';
import '../../css/x/xfeg6hcoe.css';
import '../../css/f/foe0t-bls.css';
import '../../css/h/h--rwgbbz.css';
import '../../css/u/uh5bazbdh.css';
import '../../css/o/ou-wo2z5k.css';
import '../../css/r/r81ts1ppt.css';
import '../../css/a/avvmj0bww.css';
import '../../css/n/n673ncb-k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c27x9ybmw"/><path class="xfeg6hcoe"/><circle class="foe0t-bls"/><circle class="h--rwgbbz"/><circle class="uh5bazbdh"/><circle class="ou-wo2z5k"/><circle class="r81ts1ppt"/><circle class="avvmj0bww"/><circle class="n673ncb-k"/>`,
		"fallback": "carbon:quadrant-plot",
	});
}

export default Component;
