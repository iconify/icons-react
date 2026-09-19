import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgpb1ku2d.css';
import '../../css/t/ttawbeb1z.css';
import '../../css/w/wn6av3biq.css';
import '../../css/r/r4qk41bxa.css';
import '../../css/a/azker1yhy.css';
import '../../css/f/fhboxqufu.css';
import '../../css/e/eqilswvsg.css';
import '../../css/g/gjuj7tnsm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgpb1ku2d"/><path class="ttawbeb1z"/><path class="wn6av3biq"/><path class="r4qk41bxa"/><path class="azker1yhy"/><path class="fhboxqufu"/><path class="eqilswvsg"/><path class="gjuj7tnsm"/>`,
		"fallback": "formkit:multicurrency",
	});
}

export default Component;
