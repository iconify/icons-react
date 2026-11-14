import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.za8aybc0q {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 1.75Q8.75 1.75 8.75 5T12 8.25T15.25 5T12 1.75m9.6 16.3q-1.011-1.348-2.798-2.145l-2.62-5.717q-.045-.098-.116-.18q-.07-.081-.161-.139t-.194-.089q-.103-.03-.211-.03h-7q-.108 0-.211.03q-.103.031-.194.089t-.161.139q-.071.082-.116.18l-2.62 5.717q-1.787.797-2.798 2.145q-.038.051-.067.107q-.029.057-.048.117t-.028.124t-.007.126q.002.064.015.126t.036.122t.056.113q.032.055.074.103Q4.905 21.875 12 21.875t9.569-2.887q.042-.048.074-.103q.033-.054.056-.113t.036-.122t.015-.126t-.007-.126t-.028-.124q-.019-.06-.048-.117q-.029-.056-.067-.107m-10.35-3.291q-2.315.06-4.103.494l1.834-4.003h2.269zm5.603.494q-1.788-.434-4.103-.494V11.25h2.269z");
}
</style><path class="za8aybc0q"/>`,
		"fallback": "uix-solid:lotus-pose",
	});
}

export default Component;
