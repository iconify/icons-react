import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k08wfzb-r.css';
import '../../css/k/kqj0a-16s.css';
import '../../css/b/bp8wkbb-m.css';
import '../../css/v/vzudknd9f.css';
import '../../css/c/cm-wf9fux.css';
import '../../css/d/d566cfb7x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k08wfzb-r"/><ellipse class="kqj0a-16s"/><circle class="bp8wkbb-m"/><circle class="vzudknd9f"/><circle class="cm-wf9fux"/><circle class="d566cfb7x"/></g>`,
		"fallback": "icon-park:pig",
	});
}

export default Component;
