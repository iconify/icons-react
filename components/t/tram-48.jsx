import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uor_fq5sj.css';
import '../../css/w/woz97-b0f.css';
import '../../css/l/l16j5ea0s.css';
import '../../css/d/dur5nuzqb.css';
import '../../css/w/w0ngbebtw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uor_fq5sj"/><path class="woz97-b0f"/><path class="l16j5ea0s"/><path class="dur5nuzqb"/><path class="w0ngbebtw"/>`,
		"fallback": "energy-icons:tram-48",
	});
}

export default Component;
