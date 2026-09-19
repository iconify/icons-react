import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iubyquigk.css';
import '../../css/a/alzr3bc5d.css';
import '../../css/z/zvfnxjwub.css';
import '../../css/y/yzftjwb2g.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iubyquigk"/><path class="alzr3bc5d"/><path class="zvfnxjwub"/><path class="yzftjwb2g"/>`,
		"fallback": "ep:set-up",
	});
}

export default Component;
