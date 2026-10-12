import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mzt6m_f5h.css';
import '../../css/d/de9j4cbpo.css';
import '../../css/o/o-6jqq_fb.css';
import '../../css/i/ifpajzgpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mzt6m_f5h"/><path class="de9j4cbpo"/><path class="o-6jqq_fb"/><path class="ifpajzgpo"/></g>`,
		"fallback": "lucide-extended:rocket-duotone",
	});
}

export default Component;
