import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzcwhu.css';
import '../../css/l/l13gug.css';
import '../../css/w/w5j5uc.css';
import '../../css/y/y4wbml.css';
import '../../css/n/nv-v8y.css';
import '../../css/t/tokjwc.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-66.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzcwhu l13gug"/><path class="hzcwhu w5j5uc y4wbml"/><path class="hzcwhu nv-v8y y4wbml"/><path class="hzcwhu tokjwc y4wbml"/>`,
		"fallback": "line-md:spotify-twotone",
	});
}

export default Component;
