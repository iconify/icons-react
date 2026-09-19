import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhzvabbex.css';
import '../../css/q/q3_qw6b8e.css';
import '../../css/s/sdj60ogwn.css';
import '../../css/w/w76jl489n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhzvabbex"/><path class="q3_qw6b8e"/><path class="sdj60ogwn"/><path class="w76jl489n"/>`,
		"fallback": "icon-park-solid:new-dianziqian",
	});
}

export default Component;
