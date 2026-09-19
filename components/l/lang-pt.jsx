import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/r/rx-a2fb5l.css';
import '../../css/x/x8zqoxbpb.css';
import '../../css/f/f0-5240ey.css';
import '../../css/x/xw6cxxb2i.css';
import '../../css/x/xg8t7ibsn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="rx-a2fb5l"/><path class="x8zqoxbpb"/><circle class="f0-5240ey"/><path class="xw6cxxb2i"/><path class="xg8t7ibsn"/></g>`,
		"fallback": "circle-flags:lang-pt",
	});
}

export default Component;
