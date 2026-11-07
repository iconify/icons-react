import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cixwhxber.css';
import '../../css/a/awwld0a_d.css';
import '../../css/o/o1a-n2i9j.css';
import '../../css/s/sg0-5cb7e.css';
import '../../css/x/xgyldlbls.css';
import '../../css/v/vrxvbepbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cixwhxber"/><path clip-rule="evenodd" class="awwld0a_d"/><path class="o1a-n2i9j"/><path class="sg0-5cb7e"/><path class="xgyldlbls"/><path class="vrxvbepbx"/>`,
		"fallback": "solar:washing-machine-bold-duotone",
	});
}

export default Component;
